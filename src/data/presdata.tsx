export interface presentation {
    title: string;
    event: string;
    date: string;
    venue: string;
    description: string;
    pdflocation: string;
}

const presList: presentation[] = [
    {
        title: "Analysing New Entropy Measures for Tries",
        event: "Conference SPIRE 2025",
        date: "10/09/2025",
        venue: "City St George's, University of London, United Kingdom",
        description: "We introduce new entropy measures for tries taking into account the distribution of the edge labels. To do that, we computed the total number of tries with a given symbol distribution and we derived the corresponding worst-case entropy formula. We have also used this result to introduce an empirical entropy formula for tries. These entropy formulas can be easily reached through the XBWT in analogous way as happens for the FM-index of a string. We observe that the only (worst-case) entropy formula that existed before this work did not exploit any information concerning the distribution of the edge labels.",
        pdflocation: "/presentations/SPIRE_2025.pdf"
    },
    {
        title: "Indexing Finite-State Automata Using Forward-Stable Partitions",
        event: "Conference SPIRE 2024",
        date: "23/09/2024",
        venue: "Puerto Vallarta, Jalisco, Mexico",
        description: "An index on a finite-state automaton is a data structure able to locate specific patterns on its regular language. To develop such a data structure, researchers have recently introduced an extension of the original Burrows-Wheeler transform for arbitrary automata. This transformation works through a co-lex order, that is a partial order of the automaton states consistent with the strings reaching them. In this paper, we introduce a new class of co-lex orders and we show it outperforms all the existing other classes in terms of spatial and time efficiency.",
        pdflocation: "/presentations/SPIRE_2024.pdf"
    }
]

export default presList;