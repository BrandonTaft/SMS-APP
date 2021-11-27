import com.twilio.Twilio; 
import com.twilio.converter.Promoter; 
import com.twilio.rest.api.v2010.account.Message; 
import com.twilio.type.PhoneNumber; 
 
import java.net.URI; 
import java.math.BigDecimal; 
 
public class Example { 
    // Find your Account Sid and Token at twilio.com/console 
    public static final String ACCOUNT_SID = "ACbe4024aee11782a501d5eb49459594f2"; 
    public static final String AUTH_TOKEN = "[AuthToken]"; 
 
    public static void main(String[] args) { 
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN); 
        Message message = Message.creator( 
                new com.twilio.type.PhoneNumber("+17706346786"),  
                "MGdfed4751deba59947b1822e2bdeb242b", 
                "hey")      
            .create(); 
 
        System.out.println(message.getSid()); 
    } 
}