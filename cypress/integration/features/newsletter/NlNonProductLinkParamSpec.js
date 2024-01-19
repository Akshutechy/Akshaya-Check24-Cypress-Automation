/// <reference types="Cypress" />

import NlTemplatePO from '../../../support/pageObjects/NlTemplatePO';
import NlHelper from '../../../support/helpers/NlHelper';

describe('Check the values of utm_campaign and wpset for different mailing', () => {
    const nlHelper = new NlHelper();
    const nlTemplatePO = new NlTemplatePO();

    // Ignore errors from the site itself
    Cypress.on('uncaught:exception', () => {
        return false;
    });

    // Use data from the fixture
    const nlUrlList = nlHelper.getTestData('nlUrls.json');

    Object.entries(nlUrlList).forEach(([category, url], index) => {
        it(`Test for utm_campaign for URL ${index + 1} - ${category}`, async () => {
            cy.visit(url);
            const arrayWithHRefContent = await nlTemplatePO.getLinksByElementAttribute('a[href*=utm_campaign]', 'href');
            const arrayWithOnlyUtmCampaignValues = nlHelper.extractParameterValuesOnly(arrayWithHRefContent, 'utm_campaign');
            const arrayResultAfterAssertion = nlHelper.assertArrayForSameContent(arrayWithOnlyUtmCampaignValues);
            if (!arrayResultAfterAssertion) {
                // Custom message when the assertion fails
                Cypress.log({
                    name: 'Assertion Failed --',
                    message: 'All the Values of the utm_campaign is not identical',
                });
            }
            expect(arrayResultAfterAssertion).to.be.true;
        });

        it(`Test for wpset for URL ${index + 1} - ${category}`, async () => {
            cy.visit(url);
            const arrayWithHRefContent = await nlTemplatePO.getLinksByElementAttribute('a[href*=wpset]', 'href');
            const arrayWithOnlyWpsetValues = nlHelper.extractParameterValuesOnly(arrayWithHRefContent, 'wpset');
            const arrayResultAfterAssertion = nlHelper.assertArrayForSameContent(arrayWithOnlyWpsetValues);
            if (!arrayResultAfterAssertion) {
                // Custom message when the assertion fails
                Cypress.log({
                    name: 'Assertion Failed --',
                    message: 'All the Values of the wpset is not identical',
                });
            }
            expect(arrayResultAfterAssertion).to.be.true;
        });
    });
});
