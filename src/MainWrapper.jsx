import { useState } from 'react'
import './MainWrapper.css'

function MainWrapper(){
    return (
        <>
            <div className="main-wrapper">
                <main className="main">
                    <h1>BenjaCDev</h1>
                    <article>
                        <h2>PROYECTOS</h2>
                        <div className="cartapro1">
                            <img src="/images/pro1.png" alt="Proyecto1"/>
                            <img src="/images/pro1mobile.png" alt="Proyecto1mobile"/>
                            <p>Página que enseña a cualquier jugador de valorant el nivel profesional del mismo (o ese seria el fin del proyecto). <b><a href="https://comojugarvalorant.vercel.app">Click aquí</a> para visitar</b></p>
                            <p>Hecho a puro HTML y CSS</p>
                        </div>
                    </article>
                    <article>
                        <h2>SOBRE MI SERVICIO</h2>
                        <li><b>Desarrollo tu web ideal</b></li>
                        <li><b>Con una resolucion especial para celulares</b></li>
                        <li><b>Web atractiva</b></li>
                        <li><b>Con el mejor seo y semantica posible (con las mejores practicas de HTML y CSS)</b></li>
                        <p>Me especializo en desarrollo de webs estaticas (estaticas en el sentido de que no tienen programacion como tal, algo de interaccion con el usuario muy complejo, obviamente se le puedes agregar animaciones a tu web sin ningun problema), pero eso no quiere decir que no puedas desafiar mis habilidades y ponerme a prueba, ya que considero y soy consiente de mi talento como programador. Si te decidis por contratar el mejor servicio de desarrollo web, no te vas a arrepentir, te acompañare en tu camino con una de las mejores paginas web del mercado, o la mejor. Desarrollare para ti una web que se adapte a tus necesidades y gustos, incluso te proporcionare automatizaciones de tareas y soluciones a tus problemas a base de codigos de programacion.</p>
                        <p><b>Para conocer más sobre mi servicio entra en la página de <a href="servicios.html">Servicios</a></b></p>
                    </article>
                    <article></article>
                </main>
            </div>
        </>
    )
}

export default MainWrapper