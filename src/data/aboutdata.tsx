
// This interface is used to distinguish between paragraphs that should be regular texts and hyperlinks
interface aboutPar {
  isText: boolean;
  content: string;
  hrefDest?: string; // Destination of hyperlinks. Unitiliazed if the object is not an hyperlink
} 


export interface aboutPresentation {
  name: string;
  welcomePar: aboutPar[];
  title: string;
  phdPres1: string;
  phdPres2: string;
}

const aboutWelcome : aboutPar[] = [
  {
    isText: true,
    content: "Welcome! My name is Carlo Tosoni, I am a PhD student in Computer Science at the Ca' Foscari University of Venice. I am currently carrying out research under the supervision of professors "
  },
  {
    isText: false,
    content: "Nicola Prezza",
    hrefDest: "https://nicolaprezza.github.io/",
  },
  {
    isText: true,
    content: " and "
  },
  {
    isText: false,
    content: "Ruben Becker",
    hrefDest: "https://rbnbckr.github.io/",
  },
  {
    isText: true,
    content: "."
  }
];

const dataAbout : aboutPresentation = {
  name: "Carlo Tosoni",
  welcomePar: aboutWelcome,
  title:" My Research",
  phdPres1: "Sorting is one of the most powerful techniques for enabling search on a particular data structure. For instance, using binary search it is possible to retrieve an item from a sorted list in logarithmic time w.r.t. the list dimension.",
  phdPres2: "In my PhD project, we aim to develop an efficient index for locating specific patterns on finite-state automata (FSA) by leveraging their inherent potential to be sorted. To achieve this, we design efficient algorithms and data structures to sort FSA states based on the strings reaching them. This indexing strategy naturally extends the renowned Burrows-Wheeler transform, originally devised for strings, to arbitrary FSA."
};

export default dataAbout;