import React from 'react';
import styles from "@/app/styles/common.module.css"
import MovieCard from '../components/MovieCard';

const Movie = async () => {

    await new Promise(resolve => setTimeout(resolve, 2000));


    const url = process.env.RAPID_KEY || '';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e4d0fd32b5msh0c2ee0423eeb37fp109d52jsn5caeb0b23877',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data.titles;

    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Series & Movie</h1>
                    <div className={styles.card_section}>
                        {
                            main_data.map((curElem: any) => {
                                return <MovieCard key={curElem.id} {...curElem} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Movie