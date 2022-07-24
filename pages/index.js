import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from "react";
import parse from "html-react-parser";
export default function Home() {
  const [data, setData] = useState([]);
  const [result, setResult] = useState();
  const [input, setInput] = useState(0);

  const makeTable = (data) => {
    let result = ``;
    let longLength = data.length;
    for (let i = 0; i < longLength; i++) {
      result += `<tr>`;
      for (let j = 0; j <= longLength - 1; j++) {
        if (i === j) {
          result += `<td>${data[i]}</td>`;
        } else if (i + j === longLength - 1) {
          result += `<td>${data[longLength - 1 - i]}</td>`;
        } else {
          result += `<td></td>`;
        }
      }
    }
    result += `</tr>`;
    return result;
  };

  const makeInput = () => {
    console.log(input);
    for (let i = 0; i < input; i++) {
      setData((prev) => [...prev, i + 1]);
    }
  };

  useEffect(() => {
    setResult(makeTable(data));
    console.log(data);
    // eslint-disable-next-line
  }, [data]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <input
          type="number"
          onChange={(e) => setInput(e.target.value)}
          placeholder="masukan angka"
        />
        <button onClick={makeInput}>Set</button>
        <table border="1">{parse(`${result}`)}</table>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
