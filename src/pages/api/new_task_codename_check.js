export default async function handler(req, res) {
  const {codename} = JSON.parse(req.body);
  const fs = require('fs');
  const path = './data/tasks/' + codename;
  let check = true;
  if (fs.existsSync(path)){
    check = false;
  }
  console.log(check);
  return res.status(200).json({check:check});
}