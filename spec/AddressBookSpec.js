// add a contact us a useful feature
console.log("AddressBookSpec.js");
describe('Address Book', function() {
  it('should be able to add a contact', function(){
    var addressBook = new AddressBook(),
    thisContact = new Contact();

    addressBook.addContact(thisContact);

    expect(addressBook.getContact(0)).toBe(thisContact);
  });
});
