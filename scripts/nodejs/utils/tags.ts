import axios from 'axios';
import fs from 'fs';
import datas from '../props/data.json';


const fetchData = async () => {
    const url = 'https://api.plebmasters.de/v1/objects/';
    const unableToFetch: string[] = [];
    const currentTags = getNameFromTagsCSV();
    for (const key of Object.keys(datas)) {

        try {


            if (key.startsWith("soz")) continue;
            if (currentTags.includes(key)) continue;
            await new Promise(resolve => setTimeout(resolve, 500));
            const response = await axios.get(url + key, {
                headers: {
                    "accept": "*/*",
                    "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
                    "cache-control": "no-cache",
                    "pragma": "no-cache",
                    "priority": "u=1, i",
                    "sec-ch-ua": "\"Not)A;Brand\";v=\"99\", \"Google Chrome\";v=\"127\", \"Chromium\";v=\"127\"",
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": "\"Windows\"",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-site",
                    "Referer": "https://forge.plebmasters.de/",
                    "Referrer-Policy": "strict-origin-when-cross-origin"
                },

            });
            const tags = response.data.tags;
            console.log(tags)
            const line = `${key}, ${tags.join(' - ')}`;
            fs.appendFileSync('tags.csv', line + '\n');


        } catch (error) {
            console.error('Error fetching data:', error);
            unableToFetch.push(key);
        }
        fs.writeFileSync('unableToFetch.json', JSON.stringify(unableToFetch));
    }


};

const getAllMissingName = () => {
    const csv = fs.readFileSync('tags.csv', 'utf-8');
    const missingProps: string[] = [];
    const doubleProps: string[] = [];
    const lines = csv.split('\n');
    for (const key of Object.keys(datas)) {
        const lineName = lines.find(line => { if (line.includes(key)) return key })
        if (!lineName) missingProps.push(key);
        if (lines.filter(line => line.includes(key)).length > 1) { doubleProps.push(key) } else {
            if (lineName)
                fs.appendFileSync("correctCsv.csv", lineName + '\n')
        };
    }

    console.log(doubleProps)


}

const getNameFromTagsCSV = () => {
    const csv = fs.readFileSync('tags.csv', 'utf-8');
    const lines = csv.split('\n');
    const names = lines.map(line => line.split(",")[0]);

    return names
}

const uniqProps = () => {
    const propsFile = fs.readFileSync('tags.csv', 'utf-8');
    const props = propsFile.split('\n');
    const uniq: string[] = [];
    for (const d in props) {
        const prop = props[d].split(",")[0];

        uniq.push(props[d])

    }

    // remove duplicates
    const uniqProps = new Set(uniq)
    fs.writeFileSync('uniqProps.csv', Array.from(uniqProps).join('\n'))
}


