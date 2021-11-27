from twilio.rest import Client 
 
account_sid = 'ACbe4024aee11782a501d5eb49459594f2' 
auth_token = '[AuthToken]' 
client = Client(account_sid, auth_token) 
 
message = client.messages.create(  
                              messaging_service_sid='MGdfed4751deba59947b1822e2bdeb242b', 
                              body='hey',      
                              to='+17706346786' 
                          ) 
 
print(message.sid)