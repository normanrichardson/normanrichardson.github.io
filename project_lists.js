
projects = [
    {
        type: "web",
        name: "Acme Klien Bottle",
        link: "https://github.com/normanrichardson/FCC-Landing-Page",
        topic: "Landing page",
        tech: ["html", "css", "dynamic"]
    },
    {
        type: "web",
        name: "25+5 Clock",
        link: "https://github.com/normanrichardson/FCC-25plus5-Clock",
        topic: "Front-end web application",
        tech: ["react"]
    },
    {
        type: "web",
        name: "Markdown Previewer",
        link: "https://github.com/normanrichardson/FCC-Markdown-Previewer",
        topic: "Front-end web application",
        tech: ["jQuery", "Bootstrap"]
    },
    {
        type: "web",
        name: "Choropleth Map",
        link: "https://github.com/normanrichardson/FCC-Choropleth-Map",
        topic: "Data visualization",
        tech: ["D3"]
    },
    {
        type: "web",
        name: "Treemap Diagram",
        link: "https://github.com/normanrichardson/FCC-Treemap-Diagram",
        topic: "Data visualization",
        tech: ["D3"]
    },
    {
        type: "web",
        name: "Exercise Tracker",
        link: "https://github.com/normanrichardson/FCC-Exercise-Tracker",
        topic: "API",
        tech: ["NodeJS", "Express", "MongoDB"]
    },
    {
        type: "web",
        name: "Personal Library",
        link: "https://github.com/normanrichardson/FCC-Personal-Library",
        topic: "API quality assurance",
        tech: ["chai", "NodeJS", "Express", "MongoDB"]
    },
    {
        type: "web",
        name: "Sudoku Solver",
        link: "https://github.com/normanrichardson/FCC-Sudoku-Solver",
        topic: "API quality assurance",
        tech: ["chai", "NodeJS", "Express"]
    },
    {
        type: "opensource",
        name: "structuralglass",
        link: "https://github.com/normanrichardson/StructGlassCalcs",
        topic: "Python package",
        tech: ["numpy", "scipy", "pint"]
    },
    {
        type: "opensource",
        name: "rhino_shapely_interop",
        link: "https://github.com/normanrichardson/rhino_shapely_interop",
        topic: "Python package",
        tech: ["rhino3dm", "Shapely", "numpy"]
    },

]

const projectContainerGen = (key, containerid) => {
    fproj = projects.filter(proj => proj.type == key)
    $(containerid).empty();
    fproj.forEach(project => {
        $(containerid).append(`
        <div class="project-tile" >
            <a href=${project.link} target="_blank">
                <p>${project.name}</p>
            </a>
            <span>Topic: ${project.topic}</span>
            <div class="tag-container">
            <div class="tag">
                Tech focus: 
            </div>
            ${$.map(project.tech, (tag)=>{
                return `
                <div class="tag">
                    ${tag}`
            }).join(", </div>")}
            </div>
            </div>
        </div>
    `);
    });
}

$(() => {
    projectContainerGen("web", "#web_project_container")
    projectContainerGen("opensource", "#os_project_container")
});

