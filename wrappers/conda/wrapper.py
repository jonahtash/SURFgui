from inspect import getmembers, isfunction, getargspec, signature
import importlib
import sys

module_path = sys.argv[1]

mpa = module_path.split('\\')
sys.path.append("\\".join(mpa[:-1]))
module = importlib.import_module(mpa[-1].split('.')[0])
functions = [o for o in getmembers(module) if isfunction(o[1])]
func = [o[1] for o in functions if sys.argv[2]==o[0]]
params = []
flags = {}
if len(sys.argv) > 3:
    for p in sys.argv[3:]:
        if p.startswith("FLAG::"):
            s = p[len("FLAG::"):].split('=')
            flags.update({s[0] : s[1]})
        else:
             params.append(p)

if len(params) > 0:
    ret = func[0](*params, **flags)
    if ret:
        print(ret)
else:
    ret =func()
    if ret:
        print(ret)
