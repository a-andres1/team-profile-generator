const top = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
    <title>Document</title>
</head>

<body>
    <div class="container">
        <section class="hero is-medium is-link">
            <div class="hero-body has-text-centered">
                <p class="title">
                    Meet the Team
                </p>
                <p class="subtitle" id="teamname">

                </p>
            </div>
        </section>
    </div>
    <div id="infocard">`

const bottom= `
    </div>

</body>

</html>`

function renderHtml(array) {
    result = ``;
    array.forEach(element => {
        result += `
        <div class="container mt-3">
            <div class="tile is-ancestor">
                <div class="tile is-parent">
                    <article class="tile is-child box">
                        <p class="title">${element.getRole()}</p>
                        <p class="subtitle">${element.getName()}</p>
                        <p>other stuff</p>
                        <ul>
                            <li>${element.getId()}</li>
                            <li>${element.getEmail()}</li>
                            <li>${element.getGithub()}${element.getSchool()}</li>
                        </ul>
                    </article>
                </div>
            </div>`
    });
    
    return top+result+bottom;
}

module.exports = renderHtml