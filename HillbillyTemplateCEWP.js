<script type="text/javascript" src="//code.jquery.com/jquery-1.11.1.min.js"></script> 

<link type="text/css" rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.0/themes/start/jquery-ui.css" > 
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.0/jquery-ui.min.js"></script> 

<script type="text/javascript" src="../../SiteAssets/HillbillyTemplate.js"></script> 

<style type="text/css">  
	.ms-formtable
  {display:none;}
</style>

<script type="text/javascript">

   jQuery(document).ready(function($) {
  
        $().HillbillyTemplate({
            genericAlert: true,
            alertErrorText: "Form errors exist. Please fix form errors and try again"
        });

        $( "#accordion" ).accordion();

   });
   

</script>

<h1> MY COOL TASK FORM </h1>
 <span class="hillbillyFormSave"></span>
<span class="hillbillyFormCancel"></span>

<div id="accordion">

  <h3>VB OWNED TOWERS</h3>
  <div>
    <p>
    	<table><tr><td>
         Deal Number:</td><td> <span class="hillbillyForm" data-displayName="Deal Number"></span>
         </td></tr><tr><td>
         RF Data Sheet:</td><td> <span class="hillbillyForm" data-displayName="RF Data Sheet"></span>
         </td></tr><tr><td>
         Structure Analysis:</td><td> <span class="hillbillyForm" data-displayName="Structure Analysis"></span>
         </td></tr><tr><td>
         Mount Analysis:</td><td> <span class="hillbillyForm" data-displayName="Mount Analysis"></span>
         </td></tr><tr><td>
		 Construction Drawings:</td><td> <span class="hillbillyForm" data-displayName="Construction Drawings"></span>
         </td></tr><tr><td>
		 Construction Drawings:</td><td> <span class="hillbillyForm" data-displayName="Construction Drawings"></span>
         </td></tr><tr><td>
		 Permits:</td><td> <span class="hillbillyForm" data-displayName="Permits"></span>
         </td></tr><tr><td>
		 Contractor Information:</td><td> <span class="hillbillyForm" data-displayName="Contractor Information"></span>
         </td></tr><tr><td>
		 Construction Schedule:</td><td> <span class="hillbillyForm" data-displayName="Construction Schedule"></span>
         </td></tr><tr><td>
		 Tenant COI:</td><td> <span class="hillbillyForm" data-displayName="Tenant COI"></span>
         </td></tr><tr><td>
		 Tenant Contractor COI:</td><td> <span class="hillbillyForm" data-displayName="Tenant Contractor COI"></span>
         </td></tr><tr><td>
         Climbing Certifications:</td><td> <span class="hillbillyForm" data-displayName="Climbing Certifications"></span>
         </td></tr></table>
    </p>
  </div>
  <h3>VB MANAGED ROOFTOPS</h3>
  <div>
    <p>
    	<table><tr><td>
         RF Data Sheet:</td><td> <span class="hillbillyForm" data-displayName="RF Data Sheet"></span>
         </td></tr><tr><td>
         Priority:</td><td> <span class="hillbillyForm" data-displayName="Priority"></span>
         </td></tr><tr><td>
         % Complete:</td><td> <span class="hillbillyForm" data-displayName="% Complete"></span>
         </td></tr><tr><td>
         Predecessors:</td><td> <span class="hillbillyForm" data-displayName="Predecessors"></span>
         </td></tr></table>
    </p>
  </div>
  <h3>VB MANAGED TOWERS</h3>
  <div>
    <p>
    	<table><tr><td>
         Start Date:</td><td> <span class="hillbillyForm" data-displayName="Start Date"></span>
         </td></tr><tr><td>
         Priority:</td><td> <span class="hillbillyForm" data-displayName="Priority"></span>
         </td></tr><tr><td>
         % Complete:</td><td> <span class="hillbillyForm" data-displayName="% Complete"></span>
         </td></tr><tr><td>
         Predecessors:</td><td> <span class="hillbillyForm" data-displayName="Predecessors"></span>
         </td></tr></table>
    </p>
  </div>

  </div>