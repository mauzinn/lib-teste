const fs = require("fs")

class File {
    constructor(link, prompt, extra) {
        this.link = link
        this.prompt = prompt
        this.extra = extra
    }

    Read() {
        fs.readFileSync(this.link, this.prompt, (err, data) => {
            if (err) {
                return {
                    status: false
                }
            }

            return {
                status: true,
                data
            }
        })
    }

    Write() {
        fs.writeFileSync(this.link, this.prompt, this.extra, (err) => {
            if (err) {
                return {
                    status: false
                }
            }

            return {
                status: true
            }
        })
    }
}

module.exports = File