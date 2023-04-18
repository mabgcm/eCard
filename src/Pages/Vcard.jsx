import React from 'react'

const Vcard = ({ cards }) => {
    const handleDownload = () => {
        // Create the vCard data
        console.log(cards)
        const vCardData = `
BEGIN:VCARD
VERSION:3.0
N:${cards[0].fullname}
FN:${cards[0].fullname}
ORG:${cards[0].company}
TITLE:${cards[0].title}
PHOTO;VALUE=URL;TYPE=GIF,PNG,JPEG,JPG:${cards[0].imgUrl}
TEL;TYPE=WORK,VOICE:${cards[0].workphone}
TEL;TYPE=HOME,VOICE:${cards[0].homephone}
TEL;TYPE=CELL,VOICE:${cards[0].mobilephone}
ADR;TYPE=WORK:${cards[0].workaddress}
ADR;TYPE=HOME:${cards[0].homeaddress}
EMAIL:${cards[0].email}
URL:${cards[0].website}
BDAY:${cards[0].dob}
X-SOCIALPROFILE;type=facebook:http://www.facebook.com/profile.php?id=${cards[0].facebook}
X-SOCIALPROFILE;type=twitter:http://twitter.com/${cards[0].twitter}
X-SOCIALPROFILE;type=instagram:http://instagram.com/${cards[0].instagram}
X-SOCIALPROFILE;type=github:http://github.com/${cards[0].github}
END:VCARD`;

        console.log(cards[0].fullname)
        // Create a link and click it to download the vCard file
        const vCardBlob = new Blob([vCardData], { type: 'text/x-vCard' });
        const vCardURL = window.URL.createObjectURL(vCardBlob);
        const downloadLink = document.createElement('a');
        downloadLink.href = vCardURL;
        downloadLink.download = `${cards[0].fullname}.vcf`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        window.URL.revokeObjectURL(vCardURL);
    };

    return (
        <div>
            <button className='btn btn-success' onClick={handleDownload}>Download</button>
        </div>
    );
};


export default Vcard