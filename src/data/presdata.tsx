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
        date: "10/08/2025",
        venue: "City St George's, University of London, United Kingdom",
        description: "We introduce new entropy measures for tries taking into account the distribution of the edge labels. To do that, we computed the total number of tries with a given symbol distribution and we derived the corresponding worst-case entropy formula. We use this result to also introduce an empirical entropy formula for tries. These entropy formulas can be easily reached through the XBWT in analogous way as happens for the FM-index of a string. We observe, that the only (worst-case) entropy formula that existed before this work did not exploit any information concerning the distribution of the edge labels.",
        pdflocation: "presentations/SPIRE_2025.pdf"
    }
]

export default presList;