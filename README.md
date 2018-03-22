# gdpr-data-dictionary
*Lists and taxonomy of synonyms, abbreviations, etc. for privacy data fields and supporting software to utilize them*

As the EU's General Data Protection Regulation (**GDPR**) https://gdpr-info.eu/ becomes law it will impact any entity world-wide that has a presence in the EU.  **GDPR**   requires not only to document steps taken to adhere to the law but also to acutally manage/control the information that is the basis of the law itself. **GDPR** consists of 88 pages of text about how to manage private data but only one paragraph consisting of 67 or so words that define what personal data actually is.

> *‘personal data’ means any information relating to an identified or identifiable natural person (‘data subject’); an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person;*



The purpose of this repo therefore is to provide some degree of specifity to this definition in order to identify privacy data within an organization.

## Targeted Initial Release Components 

1. A JSON specified and growing  list of terms used to define private data in databases and other locations
2. A set of Node based query and update tools to upload the JSON into various databases.
3. A database (or several databases)   that contain these same JSON-based terms in various tables and indexes. 
4. A set of schema query tools to search in various databases for items that match the terms in the data dictionary. 
5. A set of bash (grep), windows cmd and Node based text searching tool scripts to identify the same privacy data definitions in source code.

## AI and other NLP search capabilities (Future)

While it is useful to identify the location, magnitude and types of personal data within an organization a natural follow onis to provide a context free identification of personal data that does not reside in databases or source code. This will require word classification and text interpretation.  No doubt there are many AI based tools in this area that can be used as a development environment or end user app to provide this capability. Or if all else fails building a custom, specific machine learning app in this area is a possiblity. 

## Contributions

There are several key areas that need crowd sourcing  for this project to be effective. They are as follows:

1.  Synonyms and related privacy terms added to the main JSON definition files
2.  Language translations of these same terms plus culturally specific terms in other languages
3.  Database access and loading software for old school repositories such as the IBM EBCIDEC universe (MVS,IMS,CICS ...), HP, Unisys etc
4.  Tools and technologies to make this proccess less painful
5.  Instructions and how to guides as needed for using the software

## Installation

Make sure you have Node.js installed on your computer

`npm install`

To run any  javascript module such as somename.js in the repository 

`node  somename.js`

If you want to debug the same js file

`node --inspect-brk  somename.js`

Then open chrome with the url chrome://inspect and follow the chrome inspector directions for the rest

Other non Node scripts and code will have separate instructions




