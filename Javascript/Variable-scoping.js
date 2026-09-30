const browserVersion = 'Chrome';
function getBrowserVersion () {
    if (browserVersion === 'Chrome'); {
        var browserVersion = 'Chrome-2';
        console.log("browserVersion of inside Block-1 :" ,browserVersion);
        // output -- browserVersion of inside Block-1 :" ,Chrome-2
    }
    console.log("browserVersion of Outside Block-1 :" ,browserVersion);
    // outpit -- browserVersion of Outside Block-1 :" ,Chrome-2
    
    if (browserVersion === 'Chrome'); {
        let browserVersion = 'Chrome-3';
        console.log("browserVersion of inside Block-2 :" ,browserVersion);
        // output -- browserVersion of inside Block-2 :" ,Chrome-3
    }
       console.log("browserVersion of Outside Block-2 :" ,browserVersion); 
       // since let is block scoped.
       // output will be var value -- browserVersion of Outside Block-2 :" ,Chrome-2
}
console.log(browserVersion);
// output -- Chrome

getBrowserVersion ();