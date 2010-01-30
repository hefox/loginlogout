Enable and it should work

It replaces, via jquery, all user/login, logout links that do not have any other additions with ones with destination, with the intent that on logout the user will be directed to the page they were on. A check while logging out tests if they do have permission to continue seeing that page, else unsets the destination. 

