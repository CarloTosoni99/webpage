
interface Presentation {
  name: string;
  myPres: string;
  title: string;
  phdPres1: string;
  phdPres2: string;
}

const dataAbout : Presentation = {
  name: "Carlo Tosoni",
  myPres: "Welcome! My name is Carlo Tosoni, I am a PhD student in Computer Science at the Ca' Foscari University of Venice. I am currently carrying out research under the supervision of professors Nicola Prezza and Ruben Becker.",
  title: "My Research",
  phdPres1: "Sorting is one of the most powerful techniques for enabling search on a particular data structure. For instance, using binary search is possible to retrieve an item from a sorted list in logarithmic time w.r.t. the list dimension.",
  phdPres2: "In the PhD programme, we aim to develop an efficient index able to locate specific patterns on finite-state automata (FSA) by  leveraging their inherent tendency to be sorted. To achieve this, we design efficient algorithms and data structures to sort FSA states based on the strings reaching them. This indexing strategy naturally extends the renowned Burrows-Wheeler transform, originally devised for strings, to arbitrary FSA."
};

export default dataAbout;