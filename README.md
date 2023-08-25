## Assumptions
- The System is a currently established product.
- The System can be easily seeded with test data i.e: scrubbed production data, a pretest process that creates the data, or other by other means.
- System can easily be created, deployed and destoryed allowing for test deployments to be created fast and easily.
- Email UI is web based.

## Testing approach
In order for priority;

1. E2E tests, acting as user of the system for accpetance tests.  This will validate all the compontents that are essential to the key features.  Might be slow and sometimes flaky but ultimately needs to be validated to ensure the features are behaving as expected.  Requires the full system to complete.  Should be integrated into delivery pipelines so they can be run early and often.
2. unit tests.  Will allow refactoring functions with certainty.
3. create integration or contract tests.  These will validate the contract between the UI and the backend services. While these tests cannot validate the complete feature alone they allow both UI and backend services to be tested in isolation allowing faster development on individual components and help build confidence.  Also possible usage with performance base tests and security tests.  Should be integrated into each components delivery pipelines.
4. Ad-hoc testing. 

## Toolschain
For the main automation framework I choose Cypress.  Mainly, because that is currently what I'm working with most often and because I have recently discovered the Cucumber plugin and thought it would be fun to try out.

I have decided not to include CI tooling but that could be added if required.

## Structure
- Feature files are located here: `cypress\feature`.
- Step definitions are located here: `cypress\support\step_definitions`.
- Page Objects are located here: `cypress\support\pages`.