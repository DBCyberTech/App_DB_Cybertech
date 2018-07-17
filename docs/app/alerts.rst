The DB Cybertech Splunk Alerts
==============================

The DB CyberTech Splunk Application includes alerts for specific events generated from the DBC-Security logs.
By default, these alerts are configured to send emails (you need to change the destination email address).
Check with your system administrator if your Splunk instance is not yet configured to be able to send emails.

Alert: DBC Engine Restart
----------------------------

This alert is triggered when the dbfw engine of the DBC-Security appliance was restarted.
This alert is critical as an engine restart may indicate an issue with the main engine that may cause missing important database security events.
By default, this check runs every 2 minutes (which can be adjusted depending on user preference)

To utilize this alert, configure the following below:
  1.  Make sure your Splunk instance can send emails (check with your system administrator).
  2.  Edit the alert, and change the destination email address/es to your preference.
  3.  Make sure the alert is enabled.


Alert: DBC New User Identified
-------------------------------

This alert is triggered when the DBC-Security appliance detects a new database user that was created.
Depending on the network environment that is being monitored, this alert may be classified as critical or non-critical.
By default, this check runs every 2 hours (which can be adjusted depending on user preference)

To utilize this alert, configure the following below:
  1.  Make sure your Splunk instance can send emails (check with your system administrator).
  2.  Edit the alert, and change the destination email address/es to your preference.
  3.  Make sure the alert is enabled.


Alert: DBC Insider Threat Cluster Flow Activity
------------------------------------------------

This alert is triggered when a data flow is added to an incident domain to be clustered with other behavioral incident data flows.
Depending on the network environment that is being monitored, this alert may be classified as critical or non-critical.
By default, this check runs every 2 hours (which can be adjusted depending on user preference)

To utilize this alert, configure the following below:
  1.  Make sure your Splunk instance can send emails (check with your system administrator).
  2.  Edit the alert, and change the destination email address/es to your preference.
  3.  Make sure the alert is enabled.


Alert: DBC Insider Threat Policy Activity Triggered
----------------------------------------------------

This alert is triggered when a database activity that matches a custom policy was detected.
Depending on the network environment that is being monitored, this alert may be classified as critical or non-critical.
By default, this check runs every hour (which can be adjusted depending on user preference)

To utilize this alert, configure the following below:
  1.  Make sure your Splunk instance can send emails (check with your system administrator).
  2.  Edit the alert, and change the destination email address/es to your preference.
  3.  Make sure the alert is enabled.


Alert: DBC New Application Security Event
------------------------------------------

This alert is triggered when a new application security event from the protected databases is detected.
This alert is critical as a new event may indicate an SQLi attack or a lexical error that may make the database vulnerable.
By default, this check runs every 5 minutes (which can be adjusted depending on user preference)

To utilize this alert, configure the following below:
  1.  Make sure your Splunk instance can send emails (check with your system administrator).
  2.  Edit the alert, and change the destination email address/es to your preference.
  3.  Make sure the alert is enabled.


Alert: DBC New Database Host Identified
----------------------------------------

This alert is triggered when the DBC-Security appliance detects a new database host that was created.
Depending on the network environment that is being monitored, this alert may be classified as critical or non-critical.
By default, this check runs every 6 hours (which can be adjusted depending on user preference)

To utilize this alert, configure the following below:
  1.  Make sure your Splunk instance can send emails (check with your system administrator).
  2.  Edit the alert, and change the destination email address/es to your preference.
  3.  Make sure the alert is enabled.


Alert: DBC Database Table Identified
--------------------------------------

This alert is triggered when the DBC-Security appliance detects a new database table that was created.
Depending on the network environment that is being monitored, this alert may be classified as critical or non-critical.
By default, this check runs every 6 hours (which can be adjusted depending on user preference)

To utilize this alert, configure the following below:
  1.  Make sure your Splunk instance can send emails (check with your system administrator).
  2.  Edit the alert, and change the destination email address/es to your preference.
  3.  Make sure the alert is enabled.


DBC Alert: Low Disk Space
----------------------------

This alert is triggered when any one of the disk drives from the DBC-Security appliance reaches more than 60% usage
This alert on initial trigger serves as a warning that the disk may need some cleanup.  This rarely happens, and may indicate an issue with the system.  You may need to contact DB CyberTech Support when you receive this alert.
By default, this check runs every once a day (which can be adjusted depending on user preference)

To utilize this alert, configure the following below:
  1.  Make sure your Splunk instance can send emails (check with your system administrator).
  2.  Edit the alert, and change the destination email address/es to your preference.
  3.  Make sure the alert is enabled.
