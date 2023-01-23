const Translations = [
    {
        language: 'es', 
        data: {
            developer: 'Desarrollador web',
            copy: 'Todos los derechos reservados',
            personalInfo: 'Bienvenidos a mi portafolio, como he comentado anteriormente mi nombre es Xavi y tengo 18 años. A día de hoy llevo 2 años programando como autodidacta y freelance, donde he realizado diferentes proyectos para la plataforma FiveM y encargos por FiverR.  Actualmente resido en Barcelona, España. Como lenguajes en los que puedo comunicarme de manera nativa tenemos el español y el catalán, como idioma que estoy aprendiendo y que considero que no tengo un nivel bajo sería el inglés.',
            nav: {
                about: 'Sobre mí', 
                projects: 'Proyectos', 
                skills: 'Habilidades', 
                translate: 'Traducir',
            }, 
            spain: 'España',
            since: 'Años de experiencia:  ',
            verify: 'Verificar',
            prev: 'Anterior', 
            post: 'Siguiente', 
            buttons: {
                cv: 'Descargar CV', 
                cert: 'Descargar certificaciones'
            }, 
            certs: {
                smx: 'Sistemas microinformáticos y redes', 
                lserver: 'Introducción a servidores Linux', 
                ldesktop: 'Introducción al escritorio Linux'
            }
        }
    }, 
    {
        language: 'en',  
        data: {
            developer: 'Web developer',
            copy: 'All rights reserved',
            personalInfo: 'Welcome to my portfolio, as I said before my name is Xavi and I am 18 years old. Nowadays I have been programming for 2 years as self-taught and freelance, where I have done different projects for the FiveM platform and assignments for FiverR.  I currently reside in Barcelona, Spain. As languages in which I can communicate natively we have Spanish and Catalan, as a language that I am learning and that I consider that I do not have a low level would be English.',
            nav: {
                about: 'About me', 
                projects: 'Projects', 
                skills: 'Skills', 
                translate: 'Translate',
            }, 
            spain: 'Spain',
            since: 'Years of experience:  ',
            verify: 'Verify',
            buttons: {
                cv: 'Download CV', 
                cert: 'Download certificates'
            }, 
            prev: 'Previous', 
            post: 'Following',
            certs: {
                smx: 'Microcomputer systems and networks', 
                lserver: 'Introduction to Linux server', 
                ldesktop: 'Introduction to Linux desktop'
            }
        }
    }
]

const getTranslationsByLang = (lang:string) => {
    for(let i = 0; i < Translations.length; i++){
        if(Translations[i].language == lang){
            return Translations[i].data
        }
    }
}

export default getTranslationsByLang