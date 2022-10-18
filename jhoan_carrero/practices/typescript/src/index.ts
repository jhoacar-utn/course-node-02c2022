import Flask from "./flask";

const app = new Flask(__filename);

@app.get('/')
function helloWorld(){
    return "<p>Hello, World!</p>";
}

app.run();