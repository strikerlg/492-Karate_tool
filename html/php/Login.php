<!--this page is for the login on the index web page-->
<!--might be used in tkacal for the disapearance of the add to season button-->
<!--also in association with modal.js-->
<? php
//this all needs modified. 
function Login()
{
    if(empty($_POST['username']))
    {
        $this->HandleError("UserName is empty.");
        return false;
    }
    
    if(empty($_Post['password']))
    {
        $this->HandleError("Password is empty.");
        return false;
    }
    
    $username = trim($_Post['username']);
    $password = trim($_Post['password']);
    
    if(!this->CheckLoginInDB($username,$password))
    {
        return false;
    }
    
    session_start();
    
    $_SESSION[$this->GetLoginSessionVar()] = $username;
    
    return true
}

function CheckLoginInDB($username,$password)
{
    if(!this->DBlogin())
    {
        $this->HandleError("Database login failed!");
        return false;
    }
    
    //right here
    $username = $this->SanitizeForSQL($username);
    $pwdmd5 = md5($password);
    $qry = "Select name, email from $this->tablename".
        "where username = 'username' and password = '$pwdmd5' ".
        "and confirmcode= 'y'";
    
    $result = mysql_query($query,$this->connection);
    
    if(!$result || mysql_num_rows($result) <= 0)
    {
        $this->HandleError("Error logging in. ".
        "The username or password does not match. ");
        return false;
    }
    return true;
}
?>