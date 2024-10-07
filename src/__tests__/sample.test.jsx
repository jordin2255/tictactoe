
describe('Sample tests', () => {
    it('should contains the heading 1', () => {
        expect(<div>TEST</div>).toMatchSnapshot()
    });
});