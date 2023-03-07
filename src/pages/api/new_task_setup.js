export default async function handler(req, res) {
    const {codename, name, simple_type} = JSON.parse(req.body);
    const fse = require('fs-extra');
    const dir_path = './data/tasks/' + codename;
    if (simple_type) {
        await fse.copy('./data/default/simple', dir_path);
    } else {
        await fse.copy('./data/default/compl', dir_path);
    }
    const fs = require('fs');
    // TODO Proper error handling editing problem.toml
    fs.writeFileSync(dir_path + '/problem.toml',
        `code = "${codename}"\nname = "${name}"\nversion = 0\n\nauthor = ""\ntags = []\n\ntype = "${simple_type ? 'simple' : 'batch'}"\ntime_lim = 1000\nmem_lim = 256`)
    return res.status(200).json({path: dir_path});
}
