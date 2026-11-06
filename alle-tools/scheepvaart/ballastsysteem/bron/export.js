// Maakt de A3-bladen (PDF + SVG) uit de simulator.
// Gebruik:  node export.js [ruimen] [pomp]     bv.  node export.js T3,UT,T2,T1 beide
const { chromium } = require('playwright');
const path = require('path'), fs = require('fs');
const root = path.resolve(__dirname, '..'), out = path.join(root, 'bladen');
const tanks = (process.argv[2] || 'T3,UT,T2,T1').split(','), pomp = process.argv[3] || 'beide';
const NAMEN = { in: 'ballast_in', uit: 'ontballasten', rust: 'ruststand', controle: 'controleblad' };
(async () => {
  fs.mkdirSync(out, { recursive: true });
  const b = await chromium.launch(), p = await b.newPage({ viewport: { width: 1600, height: 1131 } });
  await p.goto('file://' + path.join(root, 'ballast_simulator.html'));
  await p.waitForTimeout(300);
  const versie = await p.evaluate(() => PROFIEL.versie.split(' ')[0]);
  for (const kind of ['in', 'uit', 'rust', 'controle']) {
    await p.evaluate(([k, t, pm]) => { task.tanks = new Set(t); task.pomp = pm; preparePrint(k); }, [kind, tanks, pomp]);
    const f = path.join(out, `${NAMEN[kind]}_${versie}`);
    await p.pdf({ path: f + '.pdf', preferCSSPageSize: true, printBackground: true });
    const svg = await p.evaluate(() => new XMLSerializer().serializeToString(document.getElementById('svg')));
    fs.writeFileSync(f + '.svg', '<?xml version="1.0" encoding="UTF-8"?>\n' + svg);
    await p.evaluate(() => endPrint());
    console.log(path.relative(root, f) + '.pdf/.svg');
  }
  await b.close();
})();
