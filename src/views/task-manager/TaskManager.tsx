
import { AreaChart, Area, Tooltip, XAxis, YAxis } from "recharts";
import { useState, useContext } from 'react';
import type { Iut_C } from "../../data/types/Iut_C";
import { OpenedFileContext } from "../../contexts/opened-file-context/OpenedFileContext";
import minimize from '../../assets/icons/system_icons/minimize.svg';
import close from '../../assets/icons/system_icons/close_cross.svg';
import styles from './TaskManager.module.css';
import TaskMgr from '../../assets/icons/TaskMgr.svg';

export function TaskManager() {

    const of_ctx = useContext(OpenedFileContext)
    
    const [mouseStartX, setMouseStartX] = useState(0)
    const [mouseStartY, setMouseStartY] = useState(0)
    const [down, setDown] = useState(false)
        
    const [vertical, setVertical] = useState(0) // the AAT value of "top"
    const [horizontal, setHorizontal] = useState(0) // the AAT value of "left"

    const all_skills: Iut_C[] = [
		{
			C : 1,
			title : "Réaliser un développement d'application",
			value : 0
		},
		{
			C : 2,
			title : "Optimiser des applications informatiques",
			value : 0
		},
		{
			C : 3,
			title : "Administrer des systèmes informatiques communicants complexes",
			value : 0
		},
		{
			C : 4,
			title : "Gérer des données de l'information",
			value : 0
		},
		{
			C : 5,
			title : "Conduire un projet",
			value : 0
		},
		{
			C : 6,
			title : "Travailler dans une équipe informatique",
			value : 0
		}
	]
 

    of_ctx?.all_files.map((file) => {
            if (file.file_type == 'executable') {
                for(const c of file.iut_c) {
                    all_skills[c.C - 1].value += c.value
                }
            }
        }
    )

    return (
        <div
            className={styles['task-mgr']}

            onMouseDown={function setInitialPos(event) {
                setDown(true)
                setMouseStartX(event.clientX)
                setMouseStartY(event.clientY) 

                if(of_ctx) {
                    // set focus
                }
            }}

            onMouseMove={ function updateWindowPos(event) {
                if(down) {
                    const distanceX = (mouseStartX - event.clientX) * -1
                    const distanceY = (mouseStartY - event.clientY) * -1
                    setMouseStartY(vertical + distanceY)
                    setMouseStartX(horizontal + distanceX)
                    setVertical(vertical + distanceY)
                    setHorizontal(horizontal + distanceX)
                }
            }}

            onMouseUp={ () => {
                setDown(false)

                if(of_ctx) {
                    // remove focus
                }
            }}

            onMouseLeave={ () => {
                setDown(false)
            }}

            style={{
                top: vertical,
                left: horizontal
            }}
        >

            <nav className={styles['top-bar']}>
                <div>
                    <img src={TaskMgr} alt="TaskManager" width={25} height={25}></img>
                    <span>Gestionnaire de compét. IUT</span>
                </div>

                <div className={styles['bar-actions']}>
                    <img id={styles['minimize']} src={minimize} alt="-" 
                    onClick={() => {
                        alert('Fonctionnalité non implémentée.')
                    }}
                    />
                    <img id={styles['close']} src={close} alt="X" 
                    onClick={() => {
                        alert('Fonctionnalité non implémentée.')
                    }}
                    />
                </div>
            </nav>

            <h3>Mes compétences</h3>

            <span><i>
                Chaque projet dans ce portfolio a une répartition des compétences qui y sont mobilisées. Voici une somme de ses dernières. 
            </i></span>
            <p></p><p></p>
            <AreaChart
                width={350}
                height={200}
                data={all_skills}
            >
                <XAxis dataKey='C' />
                <YAxis dataKey='value' />
                <Tooltip />

                <Area type="monotone" dataKey="value" stroke="#16f50f" fill="#37f531" />
            </AreaChart>

            <div>
                Les compétences (abbrev: C) en IUT sont des indicateurs qui permettent de mesurer les différentes abilités
                essentielles dans le métier de développeur.
            </div>
        </div>
    )
}