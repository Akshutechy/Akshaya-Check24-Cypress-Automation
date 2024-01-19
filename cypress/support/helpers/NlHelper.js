class NlHelper {

    /**
     * Extract parameter value from list of links
     * @param  {Array} links - String list of links
     * @param  {string} parameterName - For example 'wpset'
     * @return {Array} - List of link and parameter value
     * */
    extractParameterKeyAndValues = (links, parameterName) => {
        /** @type {URL} */
        let linkUrl;
        /** @type {*[]} */
        let result = [];

        for (let i = 0; i < links.length; i++) {
            linkUrl = new URL(links[i].toString());
            result.push({ link: linkUrl.href, parameterValue: linkUrl.searchParams.get(parameterName) });
        }

        return result;
    }

    /**
     * Extract parameter value from list of links
     * @param  {Array} links - String list of links
     * @param  {string} parameterName - For example 'wpset'
     * @return {Array} - List of link and parameter value
     * */
    extractParameterValuesOnly = (links, parameterName) => {
        /** @type {URL} */
        let linkUrl;
        /** @type {*[]} */
        let result = [];

        for (let i = 0; i < links.length; i++) {
            linkUrl = new URL(links[i].toString());
            result.push(linkUrl.searchParams.get(parameterName));
        }

        return result;
    }

    /**
    * Asserts whether all values in the input array are the same as its first value.
    * @param {Array} array - The input array to check.
    * @returns {boolean} - True if all values are the same, false otherwise.
    */
    assertArrayForSameContent = (array) => {
        // Check if all elements in the array are the same as its first value
        const firstValue = array[0];
        const areAllSame = array.every((value) => value === firstValue);
        return areAllSame;
    }

    /**
     * Returns a data object from a given fixture
     * @param  {string} fixture - fixture name
     * @return {JSON}
     * */
    getTestData = (fixture) => require('../../fixtures/' + fixture);


}
export default NlHelper;