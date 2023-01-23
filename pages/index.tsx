import type { NextPage } from 'next'
import Head from 'next/head' 
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import getTranslationsByLang from '../translate'
import { useState, useEffect } from 'react' 
import ShareIcon from '@material-ui/icons/Share';
import Folder from '@material-ui/icons/Folder';
import Mail from '@material-ui/icons/Mail';
import Call from '@material-ui/icons/Call';
import Map from '@material-ui/icons/Map';
import Social from '@material-ui/icons/Public';

const Skills = [
    {
        label: 'Lua', 
        since: 2, 
        percent: 90, 
        frameworks: ['FMCore']
    }, 
    {
        label: 'Javascript', 
        since: 2, 
        percent: 70, 
        frameworks: ['ReactJs', 'NextJs', 'jQuery', 'VueJS (CDN)', 'NodeJS']
    }, 
    {
        label: 'HTML', 
        since: 2, 
        percent: 80, 
    },
    {
        label: 'CSS', 
        since: 2, 
        percent: 50,  
    }, 
]

const Home: NextPage = () => {
    const [translations, setTranslations] = useState<any>(null)
    const [currentLang, setLang] = useState('es') 

    useEffect(() => {
        const translateData = getTranslationsByLang(currentLang)

        if(translateData){
            setTranslations(translateData) 
        }
    }, [])

    useEffect(() => {
        const translateData = getTranslationsByLang(currentLang)

        if(translateData){
            setTranslations(translateData) 
        }
    }, [currentLang])

    return (
        <div className={ styles.container }>
            <Head>
                <title>Xavier Morell | Portfolio</title> 
                <link rel="icon" href="/profile.ico" />
            </Head>

            {
                translations != null ? <>
                    <main className={ styles.main }>
                        <div className={ styles.nav }>
                            <div><a href='#about'>{ translations.nav.about }</a></div>
                            <div><a href='#projects'>{ translations.nav.projects }</a></div>
                            <div><a href='#skills'>{ translations.nav.skills }</a></div>
                            <div onClick={() => {
                                if(currentLang == 'es'){
                                    setLang('en')
                                } else {
                                    setLang('es')
                                }
                            }}>{ translations.nav.translate }</div>
                        </div>

                        <div className={ styles.personalInfo } id="about"> 
                            <Image src="/assets/images/picture.jpg" alt="me" width="200" height="200" />

                            <div className={ styles.content }>
                                <h2>Xavier Morell, <span>{ translations.developer }</span></h2>

                                <div>
                                    { translations.personalInfo }
                                </div>

                                <div className={ styles.buttonFlex }> 
                                    <div className={ styles.button }><a target="_blank" rel="noreferrer" href='https://drive.google.com/file/d/1SSCBGhTA00TQcjbma9LzMx64PcHDMvQD/view?usp=sharing'>{ translations.buttons.cv }</a></div> 
                                </div>
                            </div>
                        </div> 

                        <div className={ styles.contact }>
                            <div className={ styles.box }>
                                <div className={ styles.inline }>
                                    <ShareIcon className={ styles.icon } />
                                    <div><a href='https://www.linkedin.com/in/xavi-morell-058250234'>Linkedin</a></div>
                                </div>

                                <div className={ styles.inline }>
                                    <Folder className={ styles.icon } />
                                    <div><a href='https://github.com/Xavimc04'>Github</a></div>
                                </div>

                                <div className={ styles.inline }>
                                    <Social className={ styles.icon } />
                                    <div><a href='https://twitter.com/xavimorell2004'>xavimorell2004</a></div>
                                </div>
                            </div>

                            <div className={ styles.secondBox }>
                                <div className={ styles.inline }>
                                    <div><a>+34 607 82 44 40</a></div>
                                    <Call className={ styles.icon } />
                                </div>

                                <div className={ styles.inline }>
                                    <div><a>Barcelona, { translations.spain }</a></div>
                                    <Map className={ styles.icon } />
                                </div>

                                <div className={ styles.inline }>
                                    <div><a>xavimorellcampos@gmail.com</a></div>
                                    <Mail className={ styles.icon } />
                                </div>
                            </div>
                        </div>

                        <div className={ styles.squares }>  
                            <div className={ styles.box }>
                                <div className={ styles.title }>{ translations.certs.smx }</div>

                                <div className={ styles.info }>
                                    <div>{ translations.since } 2</div>
                                    <div>Monlau, Barcelona</div>
                                </div>
                            </div>

                            <div className={ styles.box }>
                                <div className={ styles.title }>{ translations.certs.lserver }</div>

                                <div className={ styles.info }>
                                    <div>{ translations.since } 2</div>
                                    <div>Monlau, Barcelona</div>
                                </div>

                                <div className={ styles.verify }><a target="_blank" rel="noreferrer" href='https://drive.google.com/file/d/1a9hw-BHjcSARZBZ8DCG3AzHgLaY6cWgg/view?usp=sharing'>{ translations.verify }</a></div>
                            </div>

                            <div className={ styles.box }>
                                <div className={ styles.title }>{ translations.certs.ldesktop }</div>

                                <div className={ styles.info }>
                                    <div>{ translations.since } 2</div>
                                    <div>Monlau, Barcelona</div>
                                </div>

                                <div className={ styles.verify }><a target="_blank" rel="noreferrer" href='https://drive.google.com/file/d/1gMnu2VfkPgXxHtIAfp-ip5kV3rkurlxE/view?usp=sharing'>{ translations.verify }</a></div>
                            </div>
                        </div>

                        <div className={ styles.skills } id="skills">
                            {
                                Skills.map((e:any, index:number) => {
                                    return <div key={ index } className={ styles.language }>
                                        <div className={ styles.header }>
                                            <div className={ styles.label }> <strong>{ e.label }</strong><span>, { translations.since } <strong>{ e.since }</strong></span></div> 
                                        
                                            <div className={ styles.frameworks }>
                                                {
                                                    e.frameworks != null ? <>
                                                        {
                                                            e.frameworks.map((framework:string, frameworkIndex:number) => {
                                                                return (
                                                                    <div className={ styles.framework } key={ frameworkIndex }>
                                                                        { framework }
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </> : <></>
                                                }
                                            </div>
                                        </div>
                                        
                                        <div className={ styles.progressContainer }>
                                            <div className={ styles.bar }>
                                                <div className={ styles.progress } style={{ width: e.percent + '%' }}></div>
                                            </div>

                                            <div className={ styles.percent }>{ e.percent }%</div>
                                        </div> 
                                    </div>
                                })
                            }
                        </div>  
                    </main>

                    <footer className={styles.footer}>
                        <a>
                            <strong>©Copyright</strong>, { translations.copy }
                        </a>
                    </footer>
                </> : <>Cargando traducciones...</>
            }
        </div>
    )
}

export default Home
