Overview
========

About the DB Cybertech Splunk App
---------------------------------

The DB Cybertech DB-Security appliance uses syslog to provide event reporting to a central Security Information and Event Management (SIEM) system and to report general system health information. Syslog output is encoded in the Common Event Format (CEF), which allows easy integration into a number of common security information and event management (SIEM), and log-analysis tools. DB Cybertech Splunk App is an add-on for Splunk that installs custom dashboards to monitor the important events that these logs generates.  These includes Service/Client/User Discovery, Application Security Events, Insider Threat Events, and Vital Health Counters.

For better performance, it is strongly suggested to install the `DB Cybertech Add-on for Splunk <https://splunkbase.splunk.com/app/3587/>`_ prior to installing `DB Cybertech Splunk App <https://splunkbase.splunk.com/app/4036/>`_.



**App Author:**
- Gerald Cortez -- `Email <mailto:gerald.cortez@dbcybertech.com>`_ - `Splunk Answers <https://answers.splunk.com/users/534151/raldz.html>`_ - `Github <https://github.com/gmcortez>`_

Splunk/DBN Version Compatibility
--------------------------------

=============== ============= ============
Splunk Version  App Version   DBN Version
Splunk 6.6.0 -  1.0.2         3.x.x 
Splunk 7.1.0    1.0.2         3.x.x
=============== ============= ============


Install From Github
-------------------

This App is avalible on SplunkBase. Or you can clone this github repo into your `$SPLUNK_HOME` folder and then restarting Splunk Enterprise.

**Splunkbase:**::

  https://splunkbase.splunk.com/app/4042/  

**Clone:**::

  git clone https://github.com/DBCybertech/App-DB_CyberTech.git App-DB_CyberTech
