const openMenu = () => {
   document.getElementById('burgerMenu').style.display = 'block' 
}

const closeMenu = () => {
    document.getElementById('burgerMenu').style.display = 'none'
}

const scrollToBlock = (id) => {
    document.getElementById(`${id}`).scrollIntoView();
    document.getElementById('burgerMenu').style.display = 'none'
}

const closeMoreInfo = (id) => {
    document.getElementById(`moreInfo${id}`).style.display = 'none'
}

const openMoreInfo = (id) => {
    document.getElementById(`moreInfo${id}`).style.display = 'flex'
}


const closeTeamInfo = (id) => {
    document.getElementById(`teamInfo${id}`).style.display = 'none'
    console.log('sadasdd')
}

const openTeamInfo = (id) => {
    document.getElementById(`teamInfo${id}`).style.display = 'flex'
}