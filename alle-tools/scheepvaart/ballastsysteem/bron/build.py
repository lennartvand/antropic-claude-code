"""Bouwt ../ballast_simulator.html uit sim_template.html + de pompplaatjes."""
from pathlib import Path
here = Path(__file__).parent
html = (here / "sim_template.html").read_text(encoding="utf-8")
for key, f in (("__PUMPL__", "pumpL.b64"), ("__PUMPR__", "pumpR.b64")):
    html = html.replace(key, (here / f).read_text(encoding="utf-8").strip())
(here.parent / "ballast_simulator.html").write_text(html, encoding="utf-8")
print("ballast_simulator.html:", len(html) // 1024, "kB")
