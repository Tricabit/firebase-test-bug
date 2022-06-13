import type { NextPage } from 'next';
import { getDatabase, onValue, ref, query } from '@firebase/database';
import { useEffect, useState } from 'react';
import writeData from '../src/firebase/writeData';
import initFirebase from '../src/firebase';

const Home: NextPage = () => {
  const [someText, setSomeText] = useState<string>('');
  const [textData, setTextData] = useState<any[]>([]);
  useEffect(() => {
    initFirebase();
    fetchData();
  }, []);

  const fetchData = () => {
    const db = getDatabase();
    const starCountRef = ref(db, 'testData');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setTextData(
        Object.entries(data || {}).map(
          ([key, value]: [key: string, value: any]) => ({
            key,
            text: value?.text,
          })
        )
      );
    });
  };

  return (
    <div className={''}>
      <form action="">
        <div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
          <label htmlFor="">Type something...</label>
          <input
            type="text"
            placeholder="Type something..."
            value={someText}
            onChange={(e) => setSomeText(e.target.value)}
          />
        </div>
        <button
          type="button"
          style={{ marginTop: 20 }}
          onClick={() => {
            writeData(someText), setSomeText('');
          }}
        >
          Click me
        </button>
      </form>
      <section style={{ marginTop: 25 }}>
        {textData.map((el, idx) => (
          <div key={idx}>
            <h3>{el.key}</h3>
            <p>{el.text}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
