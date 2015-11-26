var Model;
(function (Model) {
    var cards = [
        {
            name: "Visa",
            length: "13,16",
            prefixes: "4",
            checkdigit: true
        },
        {
            name: "MasterCard",
            length: "16",
            prefixes: "51,52,53,54,55",
            checkdigit: true
        },
        {
            name: "Discover",
            length: "16",
            prefixes: "6011,622,64,65",
            checkdigit: true
        }
    ];
    function checkCreditCard(cardNumber, cardName) {
        var card = findCardType(cardName);
        if (!card) {
            return "Unknown card type.";
        }
        // Now remove any spaces from the credit card number
        cardNumber = cardNumber.replace(/\s/g, "");
        if (cardNumber.length == 0) {
            return "Card is empty.";
        }
        // Check that the number is numeric
        var cardExp = /^[0-9]{13,19}$/;
        if (!cardExp.exec(cardNumber)) {
            return cardName + " Card contains invalid characters or length is not valid.";
        }
        // Now check the modulus 10 check digit - if required
        if (card.checkdigit) {
            var checksum = 0; // running checksum total
            var mychar = ""; // next char to process
            var j = 1; // takes value of 1 or 2
            // Process each digit one by one starting at the right
            var calc;
            for (var i = cardNumber.length - 1; i >= 0; i--) {
                // Extract the next digit and multiply by 1 or 2 on alternative digits.
                calc = Number(cardNumber.charAt(i)) * j;
                // If the result is in two digits add 1 to the checksum total
                if (calc > 9) {
                    checksum = checksum + 1;
                    calc = calc - 10;
                }
                // Add the units element to the checksum total
                checksum = checksum + calc;
                // Switch the value of j
                if (j == 1) {
                    j = 2;
                }
                else {
                    j = 1;
                }
                ;
            }
            // All done - if checksum is divisible by 10, it is a valid modulus 10.
            // If not, report an error.
            if (checksum % 10 != 0) {
                return "Invalid card number.";
            }
        }
        // Check it's not a spam number
        if (cardNumber == '5490997771092064') {
            return "Invalid card number.";
        }
        // The following are the card-specific checks we undertake.
        var LengthValid = false;
        var PrefixValid = false;
        var undefined;
        // We use these for holding the valid lengths and prefixes of a card type
        var prefix = new Array();
        var lengths = new Array();
        // Load an array with the valid prefixes for this card
        prefix = card.prefixes.split(",");
        // Now see if any of them match what we have in the card number
        for (i = 0; i < prefix.length; i++) {
            var exp = new RegExp("^" + prefix[i]);
            if (exp.test(cardNumber))
                PrefixValid = true;
        }
        // If it isn't a valid prefix there's no point at looking at the length
        if (!PrefixValid) {
            return "Invalid " + cardName + " card.";
        }
        // See if the length is valid for this card
        lengths = card.length.split(",");
        for (j = 0; j < lengths.length; j++) {
            if (cardNumber.length == lengths[j])
                LengthValid = true;
        }
        // See if all is OK by seeing if the length was valid. We only check the length if all else was 
        // hunky dory.
        if (!LengthValid) {
            return "Invalid " + cardName + " card length.";
        }
        ;
        // No error.
        return null;
    }
    Model.checkCreditCard = checkCreditCard;
    function findCardType(name) {
        var upper = (name || "").toUpperCase();
        var found = $.grep(cards, function (current, idx) { return current.name.toUpperCase() == upper; });
        return found && found.length > 0 ? found[0] : null;
    }
})(Model || (Model = {}));
//# sourceMappingURL=verifyCard.js.map