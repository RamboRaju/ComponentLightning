public class AccountList{

    @auraEnabled
    public static list<account> getAllAccounts(){
        List<account> accs =[select id,name,phone,industry from Account limit 50];
         return accs;
    }
    @AuraEnabled
    public static List<Contact> getContactRecords(string accId) {
        return new List<Contact>([Select id,Name,Phone from Contact Where AccountId =: accId LIMIT 10]);
    }

}