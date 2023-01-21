import axios from "axios";

export const getTest = async () => {
  const data = await axios.get(
    "https://drive.google.com/file/d/1VfcpyFxnSgjjIF8rm8Zc9COQ79RVQdkW/view?usp=sharing"
  );
  console.log(data);
};

export const getEventList = () => {
  const data2 = fetch(
    "https://drive.google.com/file/d/1VfcpyFxnSgjjIF8rm8Zc9COQ79RVQdkW/view?usp=sharing"
  )
    .then((res) => res.json())
    .catch((error) => console.log(error));

  console.log(data2);
};
