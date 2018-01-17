import cpf from "child_process"
import fse from "fs-extra"
import path from "path"

const _ = console.log

const projectPath = path.join(__dirname, "..")
const srcPath = path.join(projectPath, "src")
const distPath = path.join(projectPath, "dist")

_("[INFO] Cp src")
fse.copySync(srcPath, distPath)

_("[INFO] Run build")
_(cpf.execSync(`babel ${srcPath} --out-dir=${distPath}`).toString())
