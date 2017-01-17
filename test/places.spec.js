var Knwl = require('../knwl');
var knwl = new Knwl();

//Test Places Detection
describe("places", function() {

    it("should detect places formatted like 'in .' ", function() {
        knwl.init("They live in Los Angeles");
        var output = knwl.get("places");
        expect(output[0].place).toBe("Los Angeles");
    });

    it("should detect places formatted like 'in .' with a full stop", function() {
        knwl.init("They live in Los Angeles.");
        var output = knwl.get("places");
        expect(output[0].place).toBe("Los Angeles");
    });

    it("should detect places formatted like 'near .'", function() {
        knwl.init("They live near Tesco");
        var output = knwl.get("places");
        expect(output[0].place).toBe("Tesco");
    });

    it("should detect places formatted like 'near .' with a full stop", function() {
        knwl.init("They live near Tesco.");
        var output = knwl.get("places");
        expect(output[0].place).toBe("Tesco");
    });

    it("should detect places formatted like 'close to .' with a full stop", function() {
        knwl.init("They live close to Tesco.");
        var output = knwl.get("places");
        expect(output[0].place).toBe("Tesco");
    });

    it("should detect places formatted like 'close to .' with a full stop", function() {
        knwl.init("They live close to Tesco.");
        var output = knwl.get("places");
        expect(output[0].place).toBe("Tesco");
    });
});
