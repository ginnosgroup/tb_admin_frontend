/*
*
* Description: ָ���빫�������ļ�
* Author: Dmh
* Create Date: 2019-12-15
* Modify Date: 2020-02-20
*/

function return_servicename(va)
{
   switch(va)
   {
   		case 'VISA':
   					return 'ǩ֤';
   		break;
   		case 'OVST':
   					return '��ѧ';
   		break;
   }
}

function visastate_wa(va)
{
		var str_html = '';
		switch(va)
		{
			case 'WAIT':
						str_html = '���ύ���';
			break;
			case 'REVIEW':
						str_html = '<label style="color:blue;">���������</label>';
			break;
			case 'FINISH':
						str_html = '<label style="color:blue;">���������</label>';
			break;
			case 'MA_FINISH':
						str_html = '<label style="color:blue;">�����</label>';
			break;
			case 'APPLY':
						str_html = '<label style="color:blue;">����������</label>';
			break;
			case 'COMPLETE':
						str_html = '<label style="color:red;">����ɹ�</label>';
			break;
			case 'COE_COMPLETE':
						str_html = '<label style="color:red;">����ɹ�</label><br/>COE��֧��';
			break;
			case 'PAID':
						str_html = '<label style="color:red;">COE֧���ɹ�</label>';
			break;
			case 'CLOSE':
						str_html = '<label style="color:red;">�ѹر�</label>';
			break;						
		}
		return str_html;
}