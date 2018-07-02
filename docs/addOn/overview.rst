Overview
========

About the TA
------------

The DB CyberTech DBN-6300 uses syslog to provide event reporting to a central Security Information and Event Management 
(SIEM) system and to report general system health information. Syslog output is encoded in the Common Event Format (CEF), 
which allows easy integration into a number of common security information and event management (SIEM) andlog-analysis tools. 
DB CyberTech can provide sample integration with popular tools. This manual describes the DBN-6300 syslog messages.


**App Author:**
- Brandon Kirklen -- `Email <mailto:brandon.kirklen@dbcybertech.com>`_ - `Splunk Answers <https://answers.splunk.com/users/474440/brandonkirklen.html>`_ - `Github <https://github.com/BrandonKirklen>`_

Splunk/DBN Version Compatibility
--------------------------------

=============== ============= ============
Splunk Version  App Version   DBN Version
Splunk 6.5.2    1.0.0         2.2.14
Splunk 6.6.1    2.0.0         3.0.0
Splunk 7.0.0    2.0.0         4.2.4
Splunk 7.1.0    2.1.1         4.2.4
=============== ============= ============


Install From Github
-------------------

This TA is avalible on SplunkBase. Or you can clone this github repo into your `$SPLUNK_HOME` folder and then restarting Splunk Enterprise.

**Splunkbase:**::

  https://splunkbase.splunk.com/app/4065/

**Clone:**::

  git clone https://github.com/DBCyberTech/TA-DB_CyberTech TA-DB_CyberTech
