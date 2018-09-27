Overview
========

Welcome to the DB CyberTech Splunk documentation site. This site aims to document not only the details of the Splunk
integrations but also some details about the DB CyberTech syslog output. You'll find documentation divided into two
main parts as well as detailing some common elements as well. The first piece is the Splunk Add-on, this piece of code
will help to get the DB CyberTech syslog messages into a format Splunk will better understand. This is early in the processing
chain so it helps to install this first. Second, the main user interface with DB CyberTech data stored in Splunk, the App.
This will enable a "single pane of glass" look into the DB CyberTech data. 


About the Add-on
----------------

The DB CyberTech DB-Security appliance uses syslog to provide event reporting to a central Security Information and 
Event Management (SIEM) system and to report general system health information. Syslog output is encoded in the 
Common Event Format (CEF), which allows easy integration into a number of common security information and 
event management (SIEM), and log-analysis tools. The DB CyberTech Splunk Add-on manages the early grooming of DB CyberTech 
syslog messages into formats the Splunk Core more intuitively understands. This includes segmenting sourcetypes, 
parsing CEF headers, and creating the key/value pairs which power the Splunk App. 


About the DB CyberTech Splunk App
---------------------------------

DB CyberTech Splunk App is an add-on for Splunk that installs custom dashboards to monitor the important events 
that these logs generates.  These includes  Service/Client/User Discovery, Application Security Events, 
Insider Threat Events, and Vital Health Counters.

For better performance and early sourcetyping, the `DB CyberTech Add-on for Splunk <https://splunkbase.splunk.com/app/4065/>`_ 
is required for installing `DB CyberTech Splunk App <https://splunkbase.splunk.com/app/4036/>`_.


**Authors:**
- Gerald Cortez (App) -- `Email <mailto:gerald.cortez@dbcybertech.com>`_ - `Splunk Answers <https://answers.splunk.com/users/534151/raldz.html>`_ - `Github <https://github.com/gmcortez>`_
- Brandon Kirklen (Add-On) -- `Email <mailto:brandon.kirklen@dbcybertech.com>`_ - `Splunk Answers <https://answers.splunk.com/users/474440/brandonkirklen.html>`_ - `Github <https://github.com/BrandonKirklen>`_


Splunk/DBCT Version Compatibility
--------------------------------


=============== ============= ============= ============
Splunk Version  AddOn Version App Version   DBCT Version
Splunk 6.5.2    1.0.0                       2.2.14
Splunk 6.6.1    2.0.0                       3.0.0
Splunk 7.0.0    2.0.0         1.0.2         4.2.4
Splunk 7.1.0    2.1.1         2.0.1         4.2.4
=============== ============= ============= ============

Install From Github
-------------------

These projects are available on SplunkBase at the links below. 

  - **App**: `DB CyberTech Splunk Application <https://splunkbase.splunk.com/app/4042/>`_
  - **Add on**: `DB CyberTech Splunk Add-on <https://splunkbase.splunk.com/app/4065/>`_

Or if you want the most up to date code, you can clone github repo into your `$SPLUNK_HOME/etc/apps` folder and then restart 
Splunk Enterprise either though the UI or CLI.


**Clone:**::

  git clone https://github.com/DBCyberTech/App-DB_CyberTech App-DB_CyberTech
  git clone https://github.com/DBCyberTech/TA-DB_CyberTech TA-DB_CyberTech
  
