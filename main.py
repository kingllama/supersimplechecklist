from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
@app.route("/<checklist_id>")
def checklist(checklist_id=None):
    if checklist_id != None:
        pass
    return render_template("checklist.html")

if __name__ == '__main__':
    app.debug = True
    app.run()