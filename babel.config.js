const presets = [
    [
        "@babel/env",
        {
            targets: { 
                edge: "83",
                ie: "11",
                firefox: "77",
                chrome: "83",
                safari: "13.0",
            },
            useBuiltIns: "usage",
            corejs: "3.4.1"
        }
    ],
];

module.exports = { presets };