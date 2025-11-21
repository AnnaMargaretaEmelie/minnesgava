# Sanity rename – donationCopy (step1/2/3)

## Översikt

Tidigare hade donationCopy fält med namn kopplade till stegnummer (`step1Recipient`, `step2Amount`, `step3Donor` osv). De är nu ersatta med mer domänspecifika namn.

## Mapping

| Path                           | Old name       | New name       | Comment                        |
| ------------------------------ | -------------- | -------------- | ------------------------------ |
| donationCopy.step1Recipient    | step1Recipient | memorialCard   | Copy för minnesbladet (steg 1) |
| donationCopy.step1Recipient.\* | step1Section   | introSection   | Rubrik + ingress               |
| donationCopy.step2Amount       | step2Amount    | donationAmount | Copy för beloppssteget         |
| donationCopy.step2Amount.\*    | step2Section   | introSection   | Rubrik + ingress               |
| donationCopy.step2Amount.\*    | text           | infoText       | Info om skatteavdrag           |
| donationCopy.step3Donor        | step3Donor     | donorDetails   | Copy för kontaktuppgifter      |
| donationCopy.step3Donor.\*     | step3Section   | introSection   | Rubrik + ingress               |
| donationCopy.step3Donor.\*     | integrity      | integrity      | Behålls                        |
