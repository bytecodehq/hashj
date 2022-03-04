const { jHashCode, jUUIDHashCode } = require(".");

test_jHashCode = function () {
    const testCases = [
        {
            "input": "java",
            "hashCode": 3254818
        },
        {
            "input": "javascript",
            "hashCode": 188995949
        },
        {
            "input": "ecmascript",
            "hashCode": -948769283
        }
    ]

    testCases.forEach((testCase) => {
        if (jHashCode(testCase["input"]) !== testCase["hashCode"]) {
            throw EvalError("jHashCode generated hascode not consistent with Java hashcode")
        }
    });
}

test_jHashCode_returns_0_on_empty_string = function () {
    if (jHashCode("") !== 0) {
        throw EvalError("jHashCode generated hascode not consistent with Java hashcode");
    }
}

test_jUUIDHashCode = function() {
    const testCases = [
        {
            "input": "90903f27-e36e-4e6f-996a-124c58365b43",
            "hashCode": -1297991609
        },
        {
            "input": "20adfcb5-d0e7-4157-a94e-fcb749f25168",
            "hashCode": 284561469
        },
        {
            "input": "737de8e7-9ae9-4208-95c3-9514309c5032",
            "hashCode": 1288400841
        }
    ];

    testCases.forEach((testCase) => {
        if (jUUIDHashCode(testCase["input"]) !== testCase["hashCode"]) {
            throw EvalError("jUUIDHashCode generated hascode not consistent with Java UUID hashcode")
        }
    });
}

test_jUUIDHashCode_throws_TypError_on_non_UUID = function() {
    let exceptionThrown = false;
    try {
        jUUIDHashCode("foo")
    } catch (error) {
        if (error instanceof TypeError) {
            exceptionThrown = true;
        }
    }

    if (!exceptionThrown) {
        throw EvalError("jUUIDHashCode did not throw TypeError on non UUID string")
    }
}

test_jHashCode();
test_jHashCode_returns_0_on_empty_string();
test_jUUIDHashCode();
test_jUUIDHashCode_throws_TypError_on_non_UUID();