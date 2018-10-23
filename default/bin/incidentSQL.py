import sys as sys
import splunk.entity as entity

# access the credentials in /servicesNS/nobody/app_name/admin/passwords
def getCredentials(sessionKey):
   appName = 'App_DB_CyberTech'
   try:
      # list all credentials
      entities = entity.getEntities(['admin', 'passwords'], namespace=appName,
                                    owner='nobody', sessionKey=sessionKey)
   except Exception as e:
      raise Exception("Could not get %s credentials from splunk. Error: %s"
                      % (appName, str(e)))

   # return first set of credentials
   for i, c in entities.items():
        return c['username'], c['clear_password']

   raise Exception("No credentials have been found")

def main():
        # read session key sent from splunkd
        sessionKey = sys.stdin.readline().strip()

        if len(sessionKey) == 0:
           sys.stderr.write("Did not receive a session key from splunkd. " +
                            "Please enable passAuth in inputs.conf for this " +
                            "script\n")
           exit(2)

        # now get twitter credentials - might exit if no creds are available
        username, password = getCredentials(sessionKey)

        # use the credentials to access the data source
