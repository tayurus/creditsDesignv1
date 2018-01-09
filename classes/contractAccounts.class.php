<?php

	class contractAccounts{

		private $array = array();

		public function __construct(){
		}


		public function contract(){
			$array  = array(
                'Contract_address'	=> '0x#'.GetRandString(),
                'Contract_creator'	=> '0x#'.GetRandString(),
                'ETH_Balance'		=> rand(1, 15),
                'CS_Balance'		=> rand(10000, 150000),
                'txns'			=> rand(10000, 150000)
            );

			return $array;
		}


	}

?>
