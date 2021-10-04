function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
       console.log(`readyState : ${this.readyState}`);
      if (this.readyState === 4 && this.status === 200) {
        const obj = JSON.parse(this.responseText);
        document.getElementById("demo").innerHTML = this.responseText;
        console.log(obj);
        for (const element of obj) {
            console.log(element.title);
            console.log(element.userId);
        }

    }
};
    const url = "https://jsonplaceholder.typicode.com/posts";
    xhttp.open("GET", url);
    xhttp.send();
}

function loadUl() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        document.getElementById("load").innerHTML = `loading...`
       setTimeout(()=>document.getElementById("load").innerHTML =` `,400);
       console.log(`readyState : ${this.readyState}`);
      if (this.readyState === 4 && this.status === 200) {
        const objs = JSON.parse(this.responseText);
        console.log(objs);
        for (const element of objs) {
            document.getElementById("damo").innerHTML += `<ul id="damo"> <li> title: ${element.title}</li> <li> userId: ${element.userId}</li></ul>`
        }

    }
};
    const url2 = "https://jsonplaceholder.typicode.com/posts";
    xhttp.open("GET", url2);
    xhttp.send();
}

function loadDoc2() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
       console.log(`readyState : ${this.readyState}`);
      if (this.readyState === 4 && this.status === 200) {
        const obj2 = JSON.parse(this.responseText);
        document.getElementById("demo2").innerHTML = this.responseText;
        console.log(obj2);
        for (const element of obj2) {
            console.log(element.title);
            console.log(element.id);
            console.log(element.completed);
        }

    }
};
    const url3 = "https://jsonplaceholder.typicode.com/todos";
    xhttp.open("GET", url3);
    xhttp.send();
}

function loadUl2() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        document.getElementById("loading").innerHTML = `loading...`
        setTimeout(()=>document.getElementById("load").innerHTML =` `,400);
       console.log(`readyState : ${this.readyState}`);
      if (this.readyState === 4 && this.status === 200) {
        const objs2 = JSON.parse(this.responseText);
        console.log(objs2);
        for (const element of objs2) {
            document.getElementById("damo2").innerHTML += `<ul id="damo"> <li> title: ${element.title}</li> <li> userId: ${element.userId}</li> <li>completed: ${element.completed}</li></ul>`
        }

    }
};
    const url4 = "https://jsonplaceholder.typicode.com/todos";
    xhttp.open("GET", url4);
    xhttp.send();
}