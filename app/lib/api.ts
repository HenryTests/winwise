import { unstable_noStore as noStore } from 'next/cache';
import { Champion } from '@/lib/definitions';
import fs from 'fs';
import { log } from 'console';
// URL de la API que deseas consumir



export async function fetchChampionsData () {
    const apiUrlChampionsData = 'https://ddragon.leagueoflegends.com/cdn/14.3.1/data/es_MX/champion.json';
    noStore();
    try {
      // Realiza la solicitud GET a la API utilizando fetch
        const response = await fetch(apiUrlChampionsData);
        if(!response.ok){
            throw new Error("Error al obtener los datos");
        }
        const data = await response.json();
        const champions = data.data;
        return champions;
    } catch (error) {
        console.error('Error al obtener los datos', error);
    }
}

// export async function fetchChampionsDataExtended () {
//     const championsData: { [key: string]: any } = {};
//     noStore();
//     try {
//         const champions = await fetchChampionsData();
//         const championsNames = Object.values(champions).map((champion: Champion) => champion.name);
//         for (const champion of championsNames) {
//             try {
//                 const result = await fetch(`https://ddragon.leagueoflegends.com/cdn/14.3.1/data/es_MX/champion/${champion}.json`);
//                 const data = await result.json();
//                 championsData[champion] = data;
//             } catch (error) {
//                 console.error();                
//             }
//         }                
//     } catch (error) {
//         console.error('Error ocurrido', error);
//     }
//     // const finalData = Object.values(championsData);
//     // const finalData = Object.values(championsData);
//     // const finalDataTrue = finalData.map(element => element.data )
//     // const finalDataTrueValues = Object.values(finalDataTrue);
//     const finalData = Object.values(championsData); // Obtienes un arreglo de valores de championsData
//     const finalDataTrue = finalData.map(element => element.data); // Obtienes un arreglo de los valores de la propiedad "data" de cada elemento
//     const finalDataTrueValues = finalDataTrue.map(objeto => Object.values(objeto)); // Obtienes un arreglo con los valores de cada objeto dentro de finalDataTrue
//     const nuevoArreglo: Champion[] = finalDataTrueValues.flatMap(subArreglo => subArreglo);

//     const championInfo: Champion[] = nuevoArreglo.map(champion => ({
//         id: champion.id,
//         nombre: champion.name,
//         title: champion.title,
//         blurb: champion.blurb,
//         partype: champion.partype
//       }));
//     const jsonArreglo = JSON.stringify(finalData);

// // // Escribir la cadena JSON en un archivo de texto
// // fs.writeFileSync('arreglo.txt', jsonArreglo, 'utf8');
// // console.log('Arreglo de objetos almacenado en archivo de texto.');
// console.log(championInfo[0]);
// }




